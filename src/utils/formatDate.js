export function formatDate(dateString) {
  const date = dateString.split("T")[0];
  const time = dateString.split("T")[1];

  const formatedDate = date.split("-").reverse().join("/");
  const formatedTime = time.split(":").splice(0, 2).join(":");

  return `${formatedDate} às ${formatedTime}`;
}
