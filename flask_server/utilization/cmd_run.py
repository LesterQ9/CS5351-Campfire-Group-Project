import subprocess
import os

def pytestHTML():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    base_dir = os.path.dirname(base_dir)
    client_dir = os.path.dirname(base_dir)

    filepath = "assets/uploads"
    # resultpath = "assets/results"
    reportpath = "assets/report/report.html"
    destpath = "client/public"

    filepath = os.path.join(base_dir, filepath)
    # resultpath = os.path.join(base_dir, resultpath)
    reportpath = os.path.join(base_dir, reportpath)
    destpath = os.path.join(client_dir, destpath)

    # # Construct the pytest command
    # pytest_command = ["pytest", filepath, "-s", "-q", "--alluredir", resultpath]

    #Construct the pytest-html command
    html_command = ["pytest", filepath, "--html-report", reportpath]
    move_report_command = ["mv", reportpath, destpath]

    try:
        subprocess.run(html_command, check=True)
        print(f"Directory '{html_command}' run successfully.")
        subprocess.run(move_report_command, check=True)
        print(f"Directory '{move_report_command}' run successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error creating directory: {e}")
    
    # Run the command
    # try:
    #     subprocess.run(pytest_command, check=True)
    #     print(f"Directory '{pytest_command}' run successfully.")
    # except subprocess.CalledProcessError as e:
    #     print(f"Error creating directory: {e}")

def removeFile(filename):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    base_dir = os.path.dirname(base_dir)

    filepath = "assets/uploads"
    filepath = os.path.join(base_dir, filepath)

    filepath = os.path.join(filepath, filename)

    remove_command = ["rm", filepath]

    try:
        subprocess.run(remove_command, check=True)
        print(f"Directory '{remove_command}' run successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error creating directory: {e}")


removeFile('a.py')