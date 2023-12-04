def read_file_line_by_line(filepath):
    contents = []
    try:
        with open(filepath, 'r') as file:
            lines = file.readlines()
            contents = [line.strip() for line in lines]
    except FileNotFoundError:
        print(f"File not found: {filepath}")
    except Exception as e:
        print(f"An error occurred: {e}")
    
    return contents