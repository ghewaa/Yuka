import pandas as pd
import matplotlib.pyplot as plt

# Read the Parquet file into a DataFrame
df = pd.read_parquet('/home/onyxia/work/Yuka/Data/parquet/users.parquet')

# Generate a variable called 'year' by extracting the first four characters from 'created' column
df['year'] = df['created'].str[:4]

# Display the counts of users per year
year_counts = df['year'].value_counts()
print(year_counts)

# Plot users per year
year_counts.plot(kind='bar')
plt.xlabel('Year')
plt.ylabel('Number of Users')
plt.title('Users per Year')

# Show the plot
plt.show()

# Save the plot to a file
plt.savefig('users_per_year.png')

