import requests
from bs4 import BeautifulSoup

class BaseCrawler:
    def __init__(self, base_url, config):
        self.base_url = base_url
        self.config = config

    def fetch_page(self, url):
        try:
            response = requests.get(url)
            if response.status_code == 200:
                return response.content
            else:
                return None
        except requests.RequestException as e:
            print(f"Failed to fetch page: {str(e)}")
            return None

    def parse_html(self, html):
        try:
            soup = BeautifulSoup(html, 'html.parser')
            return soup
        except Exception as e:
            print(f"Failed to parse HTML: {str(e)}")
            return None

    def scrape(self):
        # Base scraping logic here, can be customized in specific crawlers
        pass
