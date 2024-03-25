import pandas as pd

# Load the dataset
df = pd.read_csv("food_product_2021.csv", dtype=str)

# Delete non-relevant empty variables
df.drop(columns=['v20', 'v21', 'v22', 'v23', 'v24', 'v25', 'v26', 'v27', 'v28', 'v29', 
                 'v30', 'v31', 'v32', 'v33', 'v34', 'v35', 'v36', 'v37', 'v38', 'v39',
                 'v40', 'v41', 'v42', 'v43', 'v44', 'v45', 'v46', 'v47', 'v48', 'v49',
                 'v50', 'v51', 'v52', 'v53', 'v54', 'v55', 'v56', 'v57', 'v58', 'v59',
                 'v60', 'v61', 'v62', 'v63', 'v64', 'v65', 'v66', 'v67'], inplace=True)

# Drop first row
df = df.iloc[1:]

# Drop rows with missing 'barcode' column
df.dropna(subset=['v2'], inplace=True)

# Renaming all variables
df.rename(columns={'v1': 'id', 'v2': 'ean', 'v3': 'name', 'v4': 'created', 'v5': 'updated',
                   'v6': 'brand', 'v7': 'category', 'v8': 'calories', 'v9': 'carbohydrates',
                   'v10': 'sugar', 'v11': 'fat', 'v12': 'saturatedfat', 'v13': 'proteins',
                   'v14': 'fibers', 'v15': 'sodium', 'v16': 'fruits', 'v17': 'bio',
                   'v18': 'ingredients', 'v19': 'grade'}, inplace=True)

# Convert 'grade' variables from string to numeric
df['grade'] = pd.to_numeric(df['grade'], errors='coerce')

# Drop rows where 'grade' is missing or greater than 100
df.dropna(subset=['grade'], inplace=True)
df = df[df['grade'] <= 100]

# Remove duplicate rows
df.drop_duplicates(inplace=True)

# Save the DataFrame to a new CSV file
# df.to_csv("processed_food_product_2021.csv", index=False)
