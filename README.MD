
# HTTP Header Fetcher

This simple tool fetches the HTTP headers of a given website using the [HackerTarget HTTP Headers API](https://hackertarget.com/http-header-check/). It's written in JavaScript and uses `axios` for HTTP requests.

## Features
- Fetches HTTP headers from any given website.
- Provides color-coded terminal outputs for better readability.
- Easy to use, with just a single function call.

## Requirements
- Node.js installed on your system.
- `axios` and `readline-sync` modules.

## Installation
Clone this repository and install the required dependencies:

```bash
git clone https://github.com/infallibless/header-fetcher.git
cd header-fetcher
npm install
```

Alternatively, you can download the script directly:

[Download HTTP Header Fetcher](https://raw.githubusercontent.com/infallibless/header-fetcher/main/fetch.js)

## Usage
1. Open your terminal.
2. Run the script:

```bash
node fetch.js
```

3. Enter the URL of the website when prompted.

## Example
```bash
Enter the URL of the site to fetch headers: https://amazon.com

✅ Headers fetched successfully!

✅ API Response:
Server: nginx
Content-Type: text/html; charset=UTF-8
Connection: keep-alive
```

## Notes
- This script relies on the [HackerTarget HTTP Headers API](https://hackertarget.com/http-header-check/). If the API is unavailable, you will see an error message.
- Use responsibly and ensure compliance with any applicable API terms of service.

## Contributing
Feel free to submit issues or pull requests to improve the tool!

## License
This project is licensed under the MIT License.
