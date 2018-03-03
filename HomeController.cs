
        [HttpGet]
        [Authorize] // Identity manages session internally
        public IActionResult isActiveSession()
        {
            var result = true;
            return Json(result);
        }
