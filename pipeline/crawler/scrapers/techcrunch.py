import sys
sys.path.append('/Users/xyw/Repos/Prophet/pipeline/crawler/')

from base_crawler import BaseCrawler

# Define the TechCrunchCrawler class
class TechCrunchCrawler(BaseCrawler):
    def __init__(self, config):
        base_url = "https://techcrunch.com/"
        super().__init__(base_url, config)

    def scrape(self):
        # Fetch the latest articles from TechCrunch
        page_url = self.base_url  #+ "latest/"
        html = self.fetch_page(page_url)
        
        if html:
            soup = self.parse_html(html)
            if soup:
                # Extract and process data specific to TechCrunch
                article_elements = soup.find_all("a", class_="post-block__title__link")
                for article_element in article_elements:
                    article_title = article_element.text.strip()
                    article_url = article_element.get("href")
                    
                    # You can process or store the article data as needed
                    print(f"Title: {article_title}")
                    print(f"URL: {article_url}")
TechCrunchCrawler(None).scrape()