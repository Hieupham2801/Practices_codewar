var reg = /".+"/g;
function getQuotes(string) {
  return string.match(reg);
}
getQuotes(
  '"Winners never quit and quitters never win." - Vince Lombardi, "My motto is, \'Never quit.\'" - Henry Rollins'
);
