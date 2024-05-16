import pandas as pd

# Load the dataset
df = pd.read_csv(food_product_2018.csv, dtype=str)

# Drop non-relevant empty variables
df.drop(columns=['v20', 'v21', 'v22', 'v23', 'v24', 'v25', 'v26', 'v27', 'v28', 'v29', 
                 'v30', 'v31', 'v32', 'v33', 'v34', 'v35', 'v36', 'v37', 'v38', 'v39',
                 'v40', 'v41', 'v42', 'v43', 'v44', 'v45', 'v46', 'v47', 'v48', 'v49',
                 'v50', 'v51', 'v52', 'v53', 'v54', 'v55', 'v56', 'v57', 'v58', 'v59',
                 'v60', 'v61', 'v62', 'v63', 'v64', 'v65', 'v66', 'v67'], inplace=True)

# Drop missing or error observations for column 'id'
df = df.dropna(subset=['id'])
df['id'] = pd.to_numeric(df['id'], errors='coerce')
df = df.dropna(subset=['id'])

# Drop missing or error observations for column 'grade'
df = df.dropna(subset=['grade'])
df['grade'] = pd.to_numeric(df['grade'], errors='coerce')
df = df.dropna(subset=['grade'])

# Remove duplicate rows
df.drop_duplicates(inplace=True)

# Save the DataFrame to a new CSV file
# df.to_csv("processed_food_product_2028.csv", index=False)