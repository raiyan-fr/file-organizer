# Directory Organizer

This Node.js program automates the process of decluttering and organizing the contents of a directory by categorizing files into separate folders based on their file extensions.

## How it Works

The program performs the following steps:

1. **Read Directory Contents**: It reads the contents of the specified directory to be organized.

2. **Iterate Through Files**: For each file in the directory, it checks the file extension.

3. **Organize Files**: Files are categorized based on their file extensions. Files with extensions `.js` and `.json` are excluded from organization. 

4. **Create Folders**: If a folder corresponding to a file extension doesn't exist, it creates one.

5. **Move Files**: Files are then moved to their respective folders.

## Prerequisites

- Node.js installed on your system.

## Usage

1. Clone this repository to your local machine.

2. Navigate to the directory containing the code.

3. Open a terminal and run the following command:
   ```bash
   node index.js
4. The program will start organizing files within the specified directory.

## Configuration

Modify the `basepath` variable in the code to specify the directory path that you want to organize.

You can customize the file extensions to be excluded or included for organization by modifying the condition inside the loop.

## Dependencies

- `fs/promises`: File System module for asynchronous file operations.
- `fs`: File System module for synchronous file operations.
- `path`: Path module for working with file and directory paths.

## Authors

- [@raiyan-fr](https://www.github.com/raiyan-fr)




## License

The project is License under [MIT License](https://choosealicense.com/licenses/mit/).
