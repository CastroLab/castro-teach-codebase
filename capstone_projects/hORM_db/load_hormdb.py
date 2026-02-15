"""
Load the hORMdb (Human Olfactory Receptor Mutation Database) dataset.

Source: https://github.com/lmc-uab/hORMdb
Format: Apache Feather (cross-compatible between R and Python)

Dataset: 119,069 variants across 378 human olfactory receptor genes
         sourced from gnomAD (Exomes/Genomes), with allele frequencies
         broken down by population.
"""

import pandas as pd
from pathlib import Path

DATA_FILE = Path(__file__).parent / "378_hOR_v21.feather"


def load() -> pd.DataFrame:
    """Load the hORMdb dataset as a pandas DataFrame."""
    return pd.read_feather(DATA_FILE)


if __name__ == "__main__":
    df = load()
    print(f"Shape: {df.shape[0]:,} rows x {df.shape[1]} columns")
    print(f"Unique genes: {df['Gene'].nunique()}")
    print(f"\nColumn names:\n{list(df.columns)}")
    print(f"\nDtypes:\n{df.dtypes.to_string()}")
    print(f"\nFirst 5 rows:\n{df.head()}")
