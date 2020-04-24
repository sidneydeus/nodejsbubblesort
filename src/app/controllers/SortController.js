import bubbleSort from "../../lib/sort";
class SortController {
  index(req, res) {
    if (req.body.list) {
      const list = bubbleSort(req.body.list);
      return res.json({ "Ordered List": list });
    }

    return res.status(403).send("Empty");
  }
}
export default new SortController();
