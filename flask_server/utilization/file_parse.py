import json
import glob

def parse_results():
    # Define the pattern for matching files
    file_pattern = '../assets/results/*-result.json'  # Adjust the pattern according to your file names

    # Use glob to get a list of file names matching the pattern
    file_list = glob.glob(file_pattern)

    results = []

    # Loop through each file and read its content
    for file_name in file_list:
        with open(file_name, 'r') as file:
            json_data = file.read()

        # Parse JSON
        data = json.loads(json_data)

        # Access and process the data as needed
        print(f"Processing {file_name}:")
        print("Name:", data.get("name", "N/A"))
        print("Status:", data.get("status", "N/A"))
        # ... and so on
        print("\n")

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

parse_results()
