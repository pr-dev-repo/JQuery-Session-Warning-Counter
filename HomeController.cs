       /* Try and catch are optional, i sm logging errors :) */
        [HttpGet]
        [Authorize]
        public IActionResult isActiveSession()
        {
            try
            {
                var result = true;
                return Json(result);
            }
            catch (Exception e)
            {
                _logger.LogError((int)LoggingEvents.EXCEPTION, Tools.ReturnExMsg(e, ControllerContext));
                AlertMessages.Error(this, _localizer["Sorry, we could not process your request. Please try again later."]);
            }
            return null;
        }
