import importlib
import pkgutil
import inspect
import sys
import os

sys.path.append('/Users/xyw/Repos/Prophet/pipeline/crawler/')

from base_crawler import BaseCrawler

def discover_crawlers(crawler_package):
    discovered_crawlers = []
    crawler_path = os.path.join(os.path.dirname(__file__), crawler_package)

    for module_info in pkgutil.iter_modules([crawler_path]):
        try:
            # Corrected module import statement
            module = importlib.import_module(f"{crawler_package}.{module_info.name}")
            for name, obj in inspect.getmembers(module):
                if inspect.isclass(obj) and issubclass(obj, BaseCrawler) and obj != BaseCrawler:
                    discovered_crawlers.append(obj)
        except Exception as e:
            print(f"Error importing module {module_info.name}: {e}")

    return discovered_crawlers

def run_crawlers():
    # Discover all available crawler classes
    crawler_classes = discover_crawlers("scrapers")  # Replace "crawlers" with your crawler directory

    # Create instances of discovered crawlers and execute them
    for crawler_class in crawler_classes:
        crawler = crawler_class(None)
        crawler.scrape()


if __name__ == "__main__":
    run_crawlers()