import pandas as pd

# Read the CSV files
df_2018 = pd.read_csv("processed_food_product_2018.csv")
df_2021 = pd.read_csv("processed_food_product_2021.csv")

# Merge the dataframes on the 'ean' variable using outer join
merged_df = pd.merge(df_2021, df_2018, on='ean', how='outer', suffixes=('_2021', '_2018'))

# Create a new column indicating if the row was merged or not
merged_df['merged'] = merged_df['ean'].notna().astype(int)

# Write the merged dataframe to a new CSV file
merged_df.to_csv("foodproducts_2018_2021.csv", index=False)

print("Merged data saved successfully.")
