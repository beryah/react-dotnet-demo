using Microsoft.AspNet.Mvc;

namespace react_dotnet_demo.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return this.File("index.html", "text/html");
        }
    }
}