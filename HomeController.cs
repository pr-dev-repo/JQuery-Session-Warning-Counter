
        [HttpGet]
        [Authorize] // Identity manages session internally
         public IActionResult IsActiveSession()
        {
                return Json(true);
        }
