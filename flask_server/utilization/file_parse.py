import json
import os

def parse_allure_results():
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

        print(data)

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

def parse_html_report() :
    file_path = 'assets/report/output.json'
    base_dir = os.path.dirname(os.path.abspath(__file__))
    base_dir = os.path.dirname(base_dir)

    file_path = os.path.join(base_dir, file_path)

    results = {}

    with open(file_path, 'r') as file:
        json_data = file.read()
        try:
            # Parse JSON
            data = json.loads(json_data)

            suite_list = []

            content = data["content"]
            suites = content["suites"]
            for i in range(len(suites)):
                item = suites[str(i)]
                test_list = []
                tests = item["tests"]
                for j in range(len(tests)):
                    test_list.append(tests[str(j)])
                suite = {
                    "status": item["status"],
                    "tests": test_list,
                    "suite_name": item["suite_name"]
                }
                suite_list.append(suite)
            
            results = {
                "suites": suite_list,
                "date": data["date"],
                "start_time": data["start_time"],
                "total_suite": data["total_suite"],
                "status": data["status"],
                "status_list": data["status_list"],
                "total_tests": data["total_tests"]
            }

        except KeyError as e:
            # Handle the case where the key is not present in the JSON data
            print(f"KeyError: {e}. The specified key does not exist in the JSON data.")
        except json.JSONDecodeError as e:
            # Handle JSON decoding errors
            print(f"JSONDecodeError: {e}. There was an error decoding the JSON data.")
        except Exception as e:
            # Handle other exceptions
            print(f"An unexpected error occurred: {e}")

        return results


