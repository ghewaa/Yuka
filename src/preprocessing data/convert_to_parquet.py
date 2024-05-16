import pandas as pd

# Read CSV file
df = pd.read_csv('/home/onyxia/work/Yuka/Data/raw/users_sample.csv')

# Convert 'is_premium' and 'has_been_premium' columns to boolean
df['is_premium'] = df['is_premium'].astype(bool, errors='ignore')
df['has_been_premium'] = df['has_been_premium'].astype(bool, errors='ignore')

# Convert 'postal_code' column to string
df['postal_code'] = df['postal_code'].astype(str)

# Save DataFrame as Parquet file
df.to_parquet('users.parquet', index=False)