# Examples

Good edge case:
- A user without the required role tries to access the changed endpoint and receives the correct forbidden response.

Good robustness edge case (string input):
- The profile name validator rejects `null`, `""`, and `"   "` with a validation error (422); it does not persist whitespace-only values.

Good robustness edge case (numeric range):
- The pagination helper accepts `page=1` and `page=maxPage` but rejects `page=0` and `page=maxPage+1` with the documented error response.

Good robustness edge case (error contract):
- `resolveBillingPeriod()` throws `InvalidArgumentException` when `starts_at` is null; the API layer converts this to 422 with a localized message — test both the unit throw and the HTTP mapping.

Bad edge case:
- Test if it works.

Bad edge case:
- Only list "invalid input" without specifying null vs empty vs whitespace vs out-of-range values.

Good failure comment:
- The provider profile update accepts an invalid phone number. Reproduce by sending `phone=abc` to the update endpoint. Expected validation error, but the API returns 200 and persists the value.

Bad failure comment:
- Something is wrong with the profile form.

Good test change:
- Add a focused feature test for the changed API endpoint using factories and asserting status, response shape, and database side effects.

Bad test change:
- Rewrite production validation logic while adding the test.
