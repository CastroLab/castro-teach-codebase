# NHANES 2013-2014: Smell, Cognition & Depression — Column Codebook

**File:** `nhanes_smell_cognition_depression_labeled.csv`
**N:** 1,785 participants aged 60–80
**Source:** [NHANES 2013-2014](https://wwwn.cdc.gov/nchs/nhanes/continuousnhanes/default.aspx?BeginYear=2013), merged from CSX_H (Taste & Smell), CFQ_H (Cognitive Functioning), DPQ_H (Depression Screener), and DEMO_H (Demographics).

---

## Demographics

| Column | Description | Values |
|--------|-------------|--------|
| `participant_id` | NHANES respondent sequence number (SEQN). Unique per participant within the 2013-2014 cycle. | Integer |
| `age` | Age in years at screening. Topcoded at 80 (all 80+ recorded as 80). | 60–80 |
| `sex` | Sex. | 1 = Male, 2 = Female |
| `race_ethnicity` | Race/Hispanic origin with Non-Hispanic Asian. | 1 = Mexican American, 2 = Other Hispanic, 3 = Non-Hispanic White, 4 = Non-Hispanic Black, 6 = Non-Hispanic Asian, 7 = Other/Multi-Racial |
| `education` | Highest education level (adults 20+). | 1 = < 9th grade, 2 = 9–11th grade (no diploma), 3 = HS graduate/GED, 4 = Some college/AA, 5 = College graduate+ |

**Codebook:** [DEMO_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DEMO_H.htm)

---

## PHQ-9 Depression Screener

The [Patient Health Questionnaire-9](https://www.apa.org/depression-guideline/patient-health-questionnaire.pdf) (PHQ-9) screens for depression severity over the past 2 weeks. Each item is scored 0–3; the total ranges 0–27. Administered to adults 18+.

| Column | PHQ-9 Item | Values |
|--------|-----------|--------|
| `phq9_little_interest` | Little interest or pleasure in doing things | 0 = Not at all, 1 = Several days, 2 = More than half the days, 3 = Nearly every day |
| `phq9_feeling_down` | Feeling down, depressed, or hopeless | Same 0–3 scale |
| `phq9_sleep_problems` | Trouble falling/staying asleep, or sleeping too much | Same 0–3 scale |
| `phq9_tired_low_energy` | Feeling tired or having little energy | Same 0–3 scale |
| `phq9_appetite_problems` | Poor appetite or overeating | Same 0–3 scale |
| `phq9_feeling_bad_about_self` | Feeling bad about yourself — or that you're a failure | Same 0–3 scale |
| `phq9_trouble_concentrating` | Trouble concentrating on things | Same 0–3 scale |
| `phq9_moving_slowly_or_fidgety` | Moving/speaking slowly, or being fidgety/restless | Same 0–3 scale |
| `phq9_self_harm_thoughts` | Thoughts of self-harm or being better off dead | Same 0–3 scale |
| `phq9_functional_difficulty` | How much have these problems made it difficult to do work, take care of things, or get along with people? | 0 = Not at all, 1 = Somewhat, 2 = Very, 3 = Extremely |
| `phq9_total` | Sum of the 9 symptom items (0–27). NaN if any item was refused/don't know. | 0–4 = None/minimal, 5–9 = Mild, 10–14 = Moderate, 15–19 = Moderately severe, 20–27 = Severe |

**N valid:** 1,642 of 1,785 (92%)
**Codebook:** [DPQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/DPQ_H.htm)

---

## Self-Reported Chemosensory Function

These questions were asked before the smell/taste examination. Binary screening items (1 = Yes, 2 = No; 9 = Don't know).

| Column | Question | Values |
|--------|----------|--------|
| `self_report_phantom_odor` | "Do you sometimes smell an unpleasant, bad, or burning odor when nothing is there?" | 1 = Yes, 2 = No, 9 = Don't know |
| `self_report_smell_problem` | "During the past 12 months, have you had a problem with your ability to smell, such as not being able to smell things or things not smelling the way they are supposed to?" | 1 = Yes, 2 = No, 9 = Don't know |
| `self_report_phantom_taste` | "Do you sometimes have a taste or other sensation in your mouth that does not go away?" | 1 = Yes, 2 = No, 9 = Don't know |
| `self_report_taste_problem` | "During the past 12 months, have you had a problem with your ability to taste sweet, sour, salty, or bitter foods and drinks?" | 1 = Yes, 2 = No, 9 = Don't know |

**N valid:** 1,785 (all participants)
**Codebook:** [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm)

---

## 8-Item Pocket Smell Test (Odorant-Level Results)

The [Sensonics Pocket Smell Test](https://pubmed.ncbi.nlm.nih.gov/37410621/) is a scratch-and-sniff odor identification test. Each item presents a microencapsulated odorant with 4 forced-choice options. Four odors are food-related and four are non-food (including two safety-relevant odors: smoke and natural gas).

| Column | Odorant | Correct answer among choices |
|--------|---------|------------------------------|
| `smell_chocolate` | Chocolate | Lemon, **Chocolate**, Smoke, Black pepper |
| `smell_strawberry` | Strawberry | **Strawberry**, Garlic, Leather, Gasoline |
| `smell_smoke` | Smoke | Garlic, Grass, **Smoke**, Peach |
| `smell_leather` | Leather | Mint, Flower, **Leather**, Apple |
| `smell_soap` | Soap | **Soap**, Black pepper, Leather, Peanut |
| `smell_grape` | Grape | Gasoline, **Grape**, Rose, Peanut |
| `smell_onion` | Onion | Chocolate, Strawberry, **Onion**, Fruit punch |
| `smell_natural_gas` | Natural Gas | Orange, Cinnamon, Cola, **Natural gas** |

Each column is binary: **1 = correctly identified, 0 = incorrect**. NaN if item was not administered.

| Column | Description |
|--------|-------------|
| `smell_total` | Total correct identifications (0–8). Sum of the 8 binary odorant columns. |
| `olfactory_status` | Categorical classification: **Normosmia (6–8)** = normal, **Hyposmia (4–5)** = reduced, **Anosmia (0–3)** = severely impaired. Cutoffs per [Rawal et al. 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC5033684/). |

**Codebook:** [CSX_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CSX_H.htm)

---

## Cognitive Functioning

All cognitive tests were administered to adults aged 60+ in English, Spanish, or an Asian language.

### CERAD Word Learning Test

The [CERAD](https://en.wikipedia.org/wiki/Consortium_to_Establish_a_Registry_for_Alzheimer%27s_Disease) Word Learning subtest assesses verbal memory. Participants see 10 unrelated words, then recall as many as possible. This is repeated for 3 learning trials. After a ~10-minute delay, a delayed recall trial is given.

| Column | Description | Range |
|--------|-------------|-------|
| `cerad_trial_1` | Words correctly recalled after 1st presentation | 0–10 |
| `cerad_trial_2` | Words correctly recalled after 2nd presentation | 0–10 |
| `cerad_trial_3` | Words correctly recalled after 3rd presentation | 0–10 |
| `cerad_total_learning` | Sum of trials 1–3. Composite immediate verbal learning score. | 0–30 |
| `cerad_delayed_recall` | Words recalled after ~10-minute delay. Sensitive to early Alzheimer's-related decline. | 0–10 |

### Animal Fluency

Measures categorical verbal fluency (executive function + semantic memory). Participants name as many animals as possible in 60 seconds.

| Column | Description | Range |
|--------|-------------|-------|
| `animal_fluency` | Unique valid animal names produced in 60 seconds. Scores < 12–14 may indicate impairment. | 0–39 |

### Digit Symbol Substitution Test (DSST)

From the WAIS-III. Measures processing speed, sustained attention, and working memory. Participants match digits to symbols using a key, working as fast as possible for 120 seconds.

| Column | Description | Range |
|--------|-------------|-------|
| `digit_symbol_score` | Correct symbol-digit matches in 120 seconds. | 0–105 |

**N valid:** CERAD = 1,674; Animal Fluency = 1,661; DSST = 1,667
**Codebook:** [CFQ_H](https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2013/DataFiles/CFQ_H.htm)
