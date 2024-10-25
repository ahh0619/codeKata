process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]);
  const b = Number(n[1]);
  let stars = "";
  for (let j = 0; j < b; j++) {
    if (stars.length >= a) stars += "\n";
    for (let i = 0; i < a; i++) {
      stars += "*";
    }
  }
  console.log(stars);
});
