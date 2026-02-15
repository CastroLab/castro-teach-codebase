# NHANES 2013-2014: Olfactory + Cognitive Dataset Column Variables

Source files: `nhanes_2013_2014_smell_cognition_60plus.csv` (1,785 participants aged 60-80)
and `nhanes_2013_2014_smell_all_40plus.csv` (3,708 participants aged 40+, smell + demographics only).

All original variables documented at the NHANES 2013-2014 data pages:
- Taste & Smell Exam: [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm)
- Cognitive Functioning: [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm)
- Demographics: [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm)

---

## Participant Identifier

| Variable | Description |
|----------|-------------|
| `SEQN` | Respondent sequence number. Unique integer identifier assigned to each NHANES participant within a survey cycle. Used as the merge key across all NHANES data files (demographics, examination, laboratory, questionnaire). Not comparable across cycles. [DEMO_H codebook](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm) |

---

## Olfactory Assessment: 8-Item Pocket Smell Test

Participants aged 40+ were administered the [Sensonics Pocket Smell Test](https://pubmed.ncbi.nlm.nih.gov/37410621/), an 8-item scratch-and-sniff forced-choice odor identification test. Each item presents a microencapsulated odorant; the participant scratches, sniffs, and selects from 4 labeled choices. Items are presented in fixed order. Four odors are food-related (chocolate, strawberry, grape, onion) and four are non-food (smoke, leather, soap, natural gas). Full codebook: [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm).

### Raw Responses (1-4 forced choice)

| Variable | Description |
|----------|-------------|
| `CSXCHOOD` | Chocolate scent identification. Forced-choice response: 1=Lemon, **2=Chocolate (correct)**, 3=Smoke, 4=Black pepper. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXSBOD` | Strawberry scent identification. Forced-choice response: **1=Strawberry (correct)**, 2=Garlic, 3=Leather, 4=Gasoline. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXSMKOD` | Smoke scent identification. Forced-choice response: 1=Garlic, 2=Grass, **3=Smoke (correct)**, 4=Peach. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXLEAOD` | Leather scent identification. Forced-choice response: 1=Mint, 2=Flower, **3=Leather (correct)**, 4=Apple. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXSOAOD` | Soap scent identification. Forced-choice response: **1=Soap (correct)**, 2=Black pepper, 3=Leather, 4=Peanut. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXGRAOD` | Grape scent identification. Forced-choice response: 1=Gasoline, **2=Grape (correct)**, 3=Rose, 4=Peanut. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXONOD` | Onion scent identification. Forced-choice response: 1=Chocolate, 2=Strawberry, **3=Onion (correct)**, 4=Fruit punch. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXNGSOD` | Natural gas scent identification. Forced-choice response: 1=Orange, 2=Cinnamon, 3=Cola, **4=Natural gas (correct)**. Included as a safety-relevant odor. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |

### Derived Smell Scores (computed by `download_and_merge.py`)

| Variable | Description |
|----------|-------------|
| `CSXCHOOD_correct` | Binary: 1 if participant correctly identified chocolate (response=2), 0 otherwise. NaN if item not administered. Derived from `CSXCHOOD`. |
| `CSXSBOD_correct` | Binary: 1 if participant correctly identified strawberry (response=1), 0 otherwise. Derived from `CSXSBOD`. |
| `CSXSMKOD_correct` | Binary: 1 if participant correctly identified smoke (response=3), 0 otherwise. Derived from `CSXSMKOD`. |
| `CSXLEAOD_correct` | Binary: 1 if participant correctly identified leather (response=3), 0 otherwise. Derived from `CSXLEAOD`. |
| `CSXSOAOD_correct` | Binary: 1 if participant correctly identified soap (response=1), 0 otherwise. Derived from `CSXSOAOD`. |
| `CSXGRAOD_correct` | Binary: 1 if participant correctly identified grape (response=2), 0 otherwise. Derived from `CSXGRAOD`. |
| `CSXONOD_correct` | Binary: 1 if participant correctly identified onion (response=3), 0 otherwise. Derived from `CSXONOD`. |
| `CSXNGSOD_correct` | Binary: 1 if participant correctly identified natural gas (response=4), 0 otherwise. Derived from `CSXNGSOD`. |
| `smell_total` | Total number of odors correctly identified (0-8). Sum of the 8 `_correct` binary variables. NaN if all items missing. Mean=6.27, SD=1.63 in the 60+ sample. |
| `olfactory_status` | Categorical classification based on `smell_total`: "Anosmia (0-3)" = severe dysfunction, "Hyposmia (4-5)" = moderate dysfunction, "Normosmia (6-8)" = normal. Cutoffs follow conventions in [Rawal et al. 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC5033684/). |

---

## Olfactory Assessment: Taste Testing

Taste function was assessed using quinine (bitter) and NaCl (salt) solutions applied to the tongue tip and sampled with the whole mouth. The general Labeled Magnitude Scale (gLMS) was used to rate perceived intensity (0-100). Approximately half of participants received repeat whole-mouth NaCl tests for reliability. Full codebook: [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm).

### Tongue Tip Tests

| Variable | Description |
|----------|-------------|
| `CSXQUIPG` | Tongue tip quinine (1 mM) perceived intensity on gLMS (0-100 continuous). The gLMS is a psychophysical scale ranging from "no sensation" (0) to "strongest imaginable sensation of any kind" (100). Solution painted directly on tongue tip. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXQUIPT` | Tongue tip quinine taste identification. What the participant reported tasting: 1=Salty, 2=Bitter (expected), 3=Something else, 4=No taste, 5=Sour. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXNAPG` | Tongue tip NaCl (1 M) perceived intensity on gLMS (0-100 continuous). High-concentration salt solution painted on tongue tip to test regional taste function. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXNAPT` | Tongue tip NaCl taste identification: 1=Salty (expected), 2=Bitter, 3=Something else, 4=No taste, 5=Sour. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |

### Whole Mouth Tests

| Variable | Description |
|----------|-------------|
| `CSXQUISG` | Whole mouth quinine (1 mM) intensity on gLMS (0-100). Participant sips and swishes the solution. Tests whole-mouth bitter perception. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXQUIST` | Whole mouth quinine taste identification: 1=Salty, 2=Bitter (expected), 3=Something else, 4=No taste, 5=Sour. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXSLTSG` | Whole mouth NaCl (1 M) intensity on gLMS (0-100). High-concentration salt, tests salty taste perception. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXSLTST` | Whole mouth NaCl (1 M) taste identification: 1=Salty (expected), 2=Bitter, 3=Something else, 4=No taste, 5=Sour. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXNASG` | Whole mouth NaCl (0.32 M) intensity on gLMS (0-100). Lower-concentration salt; used alongside 1 M to assess salt sensitivity across concentrations. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXNAST` | Whole mouth NaCl (0.32 M) taste identification: 1=Salty (expected), 2=Bitter, 3=Something else, 4=No taste, 5=Sour. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXTSEQ` | Whole mouth taste test administration sequence. A = "1M NaCl, 1mM quinine, 0.32M NaCl"; B = "0.32M NaCl, 1mM quinine, 1M NaCl". Counterbalanced across participants. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |

### Whole Mouth Repeat Tests (reliability subsample)

| Variable | Description |
|----------|-------------|
| `CSXSLTRT` | Repeat whole mouth NaCl (1 M) intensity on gLMS (0-100). Administered to ~half of participants for test-retest reliability assessment. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXSLTRG` | Repeat NaCl (1 M) taste identification: 1=Salty, 2=Bitter, 3=Something else, 4=No taste, 5=Sour. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXNART` | Repeat whole mouth NaCl (0.32 M) intensity on gLMS (0-100). Reliability replicate for the lower-concentration salt test. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXNARG` | Repeat NaCl (0.32 M) taste identification: 1=Salty, 2=Bitter, 3=Something else, 4=No taste, 5=Sour. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |

---

## Olfactory Assessment: Exam Status and Screening

| Variable | Description |
|----------|-------------|
| `CSXEXSTS` | Overall taste & smell exam completion status: 1=Complete, 2=Partial, 3=Not done. Participants with status 2 may have smell data but incomplete taste data or vice versa. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSXEXCMT` | Exam status comment code explaining why exam was partial or not done. Codes include: 1=Safety exclusion, 2=Refused, 3=No time, 4=Physical limitation, 5=Communication problem, 6=Equipment problem, 7=SP ill/emergency, 51=Unable to comply, 56=Came late/left early, 122=Language barrier, and others. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ245` | Pre-screening: "Have you ever had a skin rash or allergy caused by quinine?" 1=Yes, 2=No, 7=Refused, 9=Don't know. Participants answering "Yes" were excluded from quinine taste tests. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ241` | Pre-screening: "Are you currently pregnant or breast feeding?" 1=Yes, 2=No. Asked of females 40-59 only. Pregnant/breastfeeding women were excluded from quinine taste tests. All values NaN in the 60+ dataset. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ260A` | Current nasal symptom: "Sneeze frequently?" 1=Checked (symptom present). Part of a check-all-that-apply battery on current nasal problems administered before the smell test. NaN if not checked. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ260D` | Current nasal symptom: "Green, yellow, or brown mucus discharge?" 1=Checked. NaN if not checked. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ260G` | Current nasal symptom: "Completely blocked up nose?" 1=Checked. NaN if not checked. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ260I` | Current nasal symptom: "Sinus pain?" 1=Checked. NaN if not checked. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ260N` | Current nasal symptom: "Runny nose?" 1=Checked. NaN if not checked. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ260M` | Current nasal symptom: "None of the above." 1=Checked, indicating no current nasal symptoms. NaN if not checked. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ270` | Type of nasal blockage: "Was your nose blocked on both sides, or just one side?" 1=Both sides, 2=One side, 9=Don't know. Only asked if `CSQ260G` was checked. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSAEFFRT` | Technician's rating of participant's understanding and cooperation with exam procedures: 1=Very good, 2=Good, 3=Fair, 4=Poor, 5=Unable to cooperate. Useful as a data quality indicator. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |

---

## Olfactory Assessment: Light Sensitivity (gLMS Calibration)

These variables are gLMS intensity ratings for light stimuli of known luminance, used to calibrate each participant's use of the general Labeled Magnitude Scale before taste testing. Ratings range 0-100. Full codebook: [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm).

| Variable | Description |
|----------|-------------|
| `CSQ450` | gLMS rating for low intermediate light at 85 candelas/m². First practice light used to familiarize participants with the rating scale before taste intensity testing. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ460` | gLMS rating for high intermediate light at 439 candelas/m². Second practice light. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ470` | gLMS rating for medium test light at 193 candelas/m². First of three test lights used to assess gLMS reliability and individual scale usage. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ480` | gLMS rating for low test light at 4.3 candelas/m². Lowest-intensity test stimulus. Should produce the lowest gLMS rating among the three test lights. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |
| `CSQ490` | gLMS rating for high test light at 1000 candelas/m². Highest-intensity test stimulus. Should produce the highest gLMS rating. Ordering of light ratings can be used to validate gLMS comprehension. [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm) |

---

## Cognitive Functioning: CERAD Word Learning Test

The Consortium to Establish a Registry for Alzheimer's Disease (CERAD) Word Learning subtest assesses immediate and delayed verbal memory. Participants are shown 10 unrelated words one at a time and asked to read each aloud. Immediately after, they recall as many words as possible. This is repeated for 3 learning trials. After a delay filled by other cognitive tests (~10 min), a delayed recall trial is administered. Administered to ages 60+ in English, Spanish, or Asian languages. Full codebook: [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm). Background: [CDC Cognitive Assessments](https://www.cdc.gov/healthy-aging-data/nhanes/index.html).

### CERAD Scores

| Variable | Description |
|----------|-------------|
| `CFDCST1` | CERAD Trial 1 recall score: number of words correctly recalled after first presentation (0-10). Baseline immediate memory measure. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFDCST2` | CERAD Trial 2 recall score (0-10). Typically higher than Trial 1 due to learning effect. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFDCST3` | CERAD Trial 3 recall score (0-10). Highest of the three trials for most participants, reflecting learning ceiling. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFDCSR` | CERAD Delayed Recall score (0-10). Words recalled after ~10-minute delay without re-presentation. Measures memory retention/consolidation. Sensitive to early Alzheimer's-related decline. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |

### CERAD Intrusions

| Variable | Description |
|----------|-------------|
| `CFDCIT1` | CERAD Trial 1 intrusion word count (0-4). Number of non-list words incorrectly recalled. Elevated intrusions may indicate executive dysfunction or false memory. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFDCIT2` | CERAD Trial 2 intrusion word count (0-5). [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFDCIT3` | CERAD Trial 3 intrusion word count (0-6). [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFDCIR` | CERAD Delayed Recall intrusion word count (0-8). Intrusions during delay tend to be more clinically significant than during learning trials. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |

### CERAD Derived Scores (computed by `download_and_merge.py`)

| Variable | Description |
|----------|-------------|
| `cerad_total_learning` | Sum of Trials 1-3 recall scores (0-30). Composite measure of immediate verbal learning ability. `CFDCST1 + CFDCST2 + CFDCST3`. NaN if any trial is missing. Mean=19.3, SD=4.9 in the 60+ sample. |
| `cerad_total_intrusions` | Sum of all intrusion counts across 3 learning trials + delayed recall (0-23 theoretical max). `CFDCIT1 + CFDCIT2 + CFDCIT3 + CFDCIR`. NaN if any trial is missing. |

### CERAD Status

| Variable | Description |
|----------|-------------|
| `CFDCCS` | CERAD completion status: 1=Four completed recalls (3 learning + 1 delayed), 2=One to three completed recalls, 3=Not done. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFDCRNC` | CERAD reason not completed: 2=Communication problem, 3=Physical limitation, 4=Quit or gave up, 6=Equipment failure. NaN if CERAD was completed. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |

---

## Cognitive Functioning: Animal Fluency Test

The Animal Fluency test measures categorical verbal fluency, a component of executive function and semantic memory. Participants name as many animals as possible in 60 seconds. A practice pretest (naming 3 clothing items) must be passed before the timed test. Administered to ages 60+. Full codebook: [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm).

| Variable | Description |
|----------|-------------|
| `CFDAST` | Animal Fluency total score: number of unique, valid animal names produced in 60 seconds (range 3-39 in this sample). Scores below 12-14 may indicate cognitive impairment depending on education and language. Mean=16.4, SD=5.6. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFDAPP` | Animal Fluency practice pretest result: 1=Passed (named 3+ clothing items), 2=Failed, 3=Not done. Participants who failed were not given the timed test. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFDARNC` | Animal Fluency reason not done: 1=Did not consent to audio record, 2=Communication problem, 5=Refused, 6=Equipment failure. NaN if test was completed. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |

---

## Cognitive Functioning: Digit Symbol Substitution Test (DSST)

The DSST is a paper-and-pencil test from the Wechsler Adult Intelligence Scale (WAIS-III) measuring processing speed, sustained attention, and working memory. Participants are given a key pairing digits (1-9) with unique symbols. They then fill in the corresponding symbol for each digit in 133 boxes, working as quickly as possible for 120 seconds. A practice pretest of 9 items must be completed correctly first. Administered to ages 60+. Full codebook: [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm).

| Variable | Description |
|----------|-------------|
| `CFDDS` | Digit Symbol Substitution Test score: number of correct symbol-digit matches in 120 seconds (range 0-105 in this sample, max possible 133). Sensitive to cognitive slowing and attention deficits. Mean=46.0, SD=17.2. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFDDPP` | Digit Symbol practice pretest result: 1=Passed, 2=Failed, 3=Not done. Participants who failed the 9-item practice were not administered the timed test. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFDDRNC` | Digit Symbol reason not done: 2=Communication problem, 3=Physical limitation, 5=Refused, 6=Equipment failure. NaN if test was completed. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |

---

## Cognitive Functioning: Overall Status

| Variable | Description |
|----------|-------------|
| `CFASTAT` | Overall cognitive functioning exam status: 1=Completed all 3 tests (n=1,638), 2=Completed 2 tests (n=44), 3=Completed 1 test (n=4), 4=Ineligible due to proxy interview (n=19), 5=Ineligible due to non-English/Spanish/Asian language (n=16), 6=No tests done (n=64). [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |
| `CFALANG` | Language in which cognitive tests were administered: 1=English (n=1,488), 2=Spanish (n=167), 3=Asian language (n=31). Important covariate since language may affect verbal test performance. [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm) |

---

## Demographics

Demographic variables from the NHANES 2013-2014 interview. Full codebook: [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm).

| Variable | Description |
|----------|-------------|
| `RIDAGEYR` | Age in years at time of screening. Topcoded at 80 (i.e., all participants aged 80+ are recorded as 80) to protect confidentiality. Range in this dataset: 60-80. [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm) |
| `RIAGENDR` | Gender: 1=Male, 2=Female. [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm) |
| `RIDRETH3` | Race/Hispanic origin with Non-Hispanic Asian category: 1=Mexican American, 2=Other Hispanic, 3=Non-Hispanic White, 4=Non-Hispanic Black, 6=Non-Hispanic Asian, 7=Other/Multi-Racial. Note: code 5 is not used. [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm) |
| `DMDEDUC2` | Education level for adults 20+: 1=Less than 9th grade, 2=9-11th grade (no diploma), 3=High school graduate/GED, 4=Some college or AA degree, 5=College graduate or above. Codes 7=Refused, 9=Don't know. [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm) |
| `INDFMPIR` | Ratio of family income to the federal poverty level. Continuous, range 0-5. Values at 5.00 represent income >= 5x the poverty threshold (topcoded). Missing for ~8% of participants. [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm) |

---

## Survey Design Variables

NHANES uses a complex, multistage probability sampling design. These variables are required for producing nationally representative estimates with correct standard errors. Use with survey analysis packages (e.g., Python `statsmodels`, R `survey`). Full codebook: [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm). Tutorial: [NHANES Survey Design](https://wwwn.cdc.gov/nchs/nhanes/tutorials/default.aspx).

| Variable | Description |
|----------|-------------|
| `WTMEC2YR` | Full-sample 2-year MEC examination weight. Accounts for differential probability of selection, non-response, and post-stratification to Census population totals. Required for any analysis producing population-level prevalence or mean estimates. Value of 0 indicates participant was not MEC-examined. [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm) |
| `SDMVPSU` | Masked variance pseudo-PSU (Primary Sampling Unit). Values 1 or 2. Used with `SDMVSTRA` to compute design-corrected standard errors via Taylor series linearization. Must be specified in survey design functions. [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm) |
| `SDMVSTRA` | Masked variance pseudo-stratum. Values 104-118. Defines the variance strata for the survey design. Paired with `SDMVPSU` for variance estimation. [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm) |
