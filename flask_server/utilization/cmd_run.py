import subprocess
import os

base_dir = os.path.dirname(os.path.abspath(__file__))
base_dir = os.path.dirname(base_dir)

filepath = "assets/test_files/"
resultpath = "assets/results"
reportpath = "assets/report/report.html"

filepath = os.path.join(base_dir, filepath)
resultpath = os.path.join(base_dir, resultpath)
reportpath = os.path.join(base_dir, reportpath)


# Construct the pytest command
pytest_command = ["pytest", filepath, "-s", "-q", "--alluredir", resultpath]

#Construct the pytest-html command
html_command = ["pytest", filepath, "--html-report", reportpath]

# Run the command
# try:
#     subprocess.run(pytest_command, check=True)
#     print(f"Directory '{pytest_command}' run successfully.")
# except subprocess.CalledProcessError as e:
#     print(f"Error creating directory: {e}")

try:
    subprocess.run(html_command, check=True)
    print(f"Directory '{html_command}' run successfully.")
except subprocess.CalledProcessError as e:
    print(f"Error creating directory: {e}")