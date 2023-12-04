import json
import os

def parse_results():
    # Define the pattern for matching files in the 'results' directory
    file_pattern = '-result.json'

    file_path = 'assets/results'

    base_dir = os.path.dirname(os.path.abspath(__file__))
    base_dir = os.path.dirname(base_dir)

    file_path = os.path.join(base_dir, file_path)
    
    file_list = [f for f in os.listdir(file_path) if f.endswith(file_pattern)]

    results = []

    # Loop through each file and read its content
    for file_name in file_list:
        temp_file_path = os.path.join(file_path, file_name);
        with open(temp_file_path, 'r') as file:
            json_data = file.read()

        # Parse JSON
        data = json.loads(json_data)

        labels = []

        for label in data["labels"]:
            temp = {
                "name": label["name"],
                "value": label["value"]
            }
            labels.append(temp)

        result = {
            "name": data.get("name", "N/A"),
            "status": data.get("status", "N/A"),
            "start": data.get("start", "N/A"),
            "stop": data.get("stop", "N/A"),
            "uuid": data.get("uuid", "N/A"),
            "historyId": data.get("historyId", "N/A"),
            "testCaseId": data.get("testCaseId", "N/A"),
            "fullName": data.get("fullName", "N/A"),
            "labels": labels if labels else "N/A"
        }

        results.append(result)
    
    return results
