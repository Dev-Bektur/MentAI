saveTestResult("Математика", 0)
saveTestResult("Аналогия", 0)
saveTestResult("Чтение и понимание", 0)

export function saveTestResult(subject, percent) {
  const results = JSON.parse(localStorage.getItem("testResults")) || {}
  results[subject] = percent
  localStorage.setItem("testResults", JSON.stringify(results))
}