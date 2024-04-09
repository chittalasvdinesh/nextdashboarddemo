export default function handler(req,res){
  console.log(req);
  const params=req.query.params;
  res.status(200).json(params)

}