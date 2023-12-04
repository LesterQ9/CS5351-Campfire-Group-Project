import subprocess

filepath = "../../assets/test_files/a.py"
resultpath = "../../assets/results"

# Construct the pytest command
pytest_command = ["pytest", filepath, "-s", "-q", "--alluredir", resultpath]

# Run the command
try:
    subprocess.run(pytest_command, check=True)
    print(f"Directory '{pytest_command}' run successfully.")
except subprocess.CalledProcessError as e:
    print(f"Error creating directory: {e}")