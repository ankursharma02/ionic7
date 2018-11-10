using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GeogrphyService.Controllers
{
    class Geography
    {
        public string Name { get; set; }
        public int id { get; set; }
    }
    [Route("api/[Controller]")]
    public class GeoController : Controller
    {
        List<Geography> geograph = new List<Geography>();

        public IActionResult Index()
        {
            geograph.Add(new Geography() { id = 1,Name="ankur" });
            geograph.Add(new Geography() { id = 2, Name = "ankurs" });
            geograph.Add(new Geography() { id = 3, Name = "ankursh" });
            geograph.Add(new Geography() { id = 4, Name = "ankursha" });
            return new JsonResult(geograph);
        }
    }
}