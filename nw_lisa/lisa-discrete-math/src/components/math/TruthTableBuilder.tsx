'use client';

import { useState, useEffect, useCallback } from 'react';
import MathDisplay from './MathDisplay';

interface TruthTableBuilderProps {
  variables: string[];
  expression: string;
  onChange: (values: string[][]) => void;
  correctValues?: string[][];
}

function generateRows(numVars: number): string[][] {
  const totalRows = Math.pow(2, numVars);
  const rows: string[][] = [];
  for (let i = 0; i < totalRows; i++) {
    const row: string[] = [];
    for (let v = numVars - 1; v >= 0; v--) {
      row.push((i >> v) & 1 ? 'F' : 'T');
    }
    rows.push(row);
  }
  return rows;
}

export default function TruthTableBuilder({
  variables,
  expression,
  onChange,
  correctValues,
}: TruthTableBuilderProps) {
  const inputRows = generateRows(variables.length);
  const numExprCols = correctValues ? correctValues[0]?.length ?? 1 : 1;

  const [userValues, setUserValues] = useState<string[][]>(() =>
    inputRows.map(() => Array(numExprCols).fill(''))
  );

  useEffect(() => {
    setUserValues(inputRows.map(() => Array(numExprCols).fill('')));
  }, [variables.length, numExprCols]);

  const toggleCell = useCallback(
    (rowIdx: number, colIdx: number) => {
      setUserValues((prev) => {
        const next = prev.map((row) => [...row]);
        const current = next[rowIdx][colIdx];
        if (current === '') {
          next[rowIdx][colIdx] = 'T';
        } else if (current === 'T') {
          next[rowIdx][colIdx] = 'F';
        } else {
          next[rowIdx][colIdx] = '';
        }
        onChange(next);
        return next;
      });
    },
    [onChange]
  );

  const getCellStyle = (rowIdx: number, colIdx: number): string => {
    if (!correctValues) return '';
    const userVal = userValues[rowIdx]?.[colIdx];
    const correctVal = correctValues[rowIdx]?.[colIdx];
    if (!userVal) return '';
    if (userVal === correctVal) {
      return 'bg-green-100 text-green-800 border-green-300';
    }
    return 'bg-red-100 text-red-800 border-red-300';
  };

  return (
    <div className="my-4 overflow-x-auto">
      <table className="border-collapse mx-auto">
        <thead>
          <tr>
            {variables.map((v) => (
              <th
                key={v}
                className="px-4 py-2 border border-gray-300 bg-gray-100 font-serif font-bold text-center"
              >
                <MathDisplay math={v} />
              </th>
            ))}
            <th className="px-4 py-2 border border-gray-300 bg-indigo-50 font-serif font-bold text-center">
              <MathDisplay math={expression} />
            </th>
          </tr>
        </thead>
        <tbody>
          {inputRows.map((inputRow, rowIdx) => (
            <tr key={rowIdx}>
              {inputRow.map((val, colIdx) => (
                <td
                  key={colIdx}
                  className="px-4 py-2 border border-gray-300 text-center font-mono font-semibold"
                >
                  {val}
                </td>
              ))}
              {Array.from({ length: numExprCols }).map((_, exprColIdx) => {
                const cellValue = userValues[rowIdx]?.[exprColIdx] ?? '';
                const cellStyle = getCellStyle(rowIdx, exprColIdx);
                return (
                  <td
                    key={`expr-${exprColIdx}`}
                    className={`px-4 py-2 border border-gray-300 text-center font-mono font-semibold
                                cursor-pointer select-none transition-colors hover:bg-blue-50 ${cellStyle}`}
                    onClick={() => toggleCell(rowIdx, exprColIdx)}
                    role="button"
                    aria-label={`Row ${rowIdx + 1}, expression column ${exprColIdx + 1}: ${cellValue || 'empty'}`}
                  >
                    {cellValue || (
                      <span className="text-gray-300">?</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
