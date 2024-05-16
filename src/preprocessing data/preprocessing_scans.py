import pandas as pd

# Define the directory path
directory_path = ""

# Define the number of files and their corresponding ranges
file_ranges = [(0, 9), (10, 99), (100, 120), (121, 240), (241, 360), (361, 480), (481, 600), (601, 720), (721, 840), (841, 960), (961, 999), (1000, 1068)]

# Loop through each range of files
for start, end in file_ranges:
    dfs = []
    # Loop through each file in the range
    for i in range(start, end + 1):
        file_path = f"{directory_path}/scanlog_export-00000000{i}.csv"
        df = pd.read_csv(file_path)
        # Loop through variables to encode and rename
        for v in ['wifi', 'latitude', 'longitude', 'distributor', 'continent', 'country', 'region', 'city']:
            if v in df.columns:
                try:
                    df[v] = pd.to_numeric(df[v], errors='raise')
                except ValueError:
                    df[v] = df[v].astype('category').cat.codes
        dfs.append(df)
        
    # Concatenate all dataframes within the range
    concatenated_df = pd.concat(dfs)
   
    # Save the concatenated and processed DataFrame to a CSV file
    concatenated_df.to_csv(f"SCAN{end}.csv", index=False)
