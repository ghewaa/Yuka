import pandas as pd

# Initialize an empty DataFrame
merged_df = pd.DataFrame()

# Loop through each file
for i in range(10):
    # Load the CSV file
    filename = f"users_export-00000000000{i}.csv"
    df = pd.read_csv(filename)
    
    # Append the data to the merged DataFrame
    merged_df = merged_df.append(df, ignore_index=True)

# Drop the first row
merged_df = merged_df.iloc[1:]

# Rename columns
merged_df = merged_df.rename(columns={
    'v1': 'user',
    'v2': 'created',
    'v3': 'device',
    'v4': 'phone_country',
    'v5': 'language',
    'v6': 'is_premium',
    'v7': 'has_been_premium',
    'v8': 'continent',
    'v9': 'country',
    'v10': 'region',
    'v11': 'city',
    'v12': 'postal_code'
})

# Save the merged DataFrame to a CSV file
merged_df.to_csv('dataset_users.csv', index=False)


