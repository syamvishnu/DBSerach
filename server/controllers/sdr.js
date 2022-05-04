import Item from "../models/searchSdr.js";




let postSdr = async (req, res)=>{
    const number = req.body;
    var quary = number
    console.log(quary);
    await Item.findOne(quary, (err, doc) => {
        if(err){
            
            res.send(err)
        }
        else{
            res.send(doc)
                // console.log(req.body);
                console.log(doc);
                
        }
    })
}

// let  getSdr = async (req,res)=>{  
//     const number = req.body;
//     var quary = number
//     console.log(req.body);
//     await Item.findOne(quary,(err,result)=>{
//         if(err){
//             res.send(err)
//         }else{
//             res.send(result)
//             // console.log(result);
//             // console.log("abc");
//         }
//     });
// }

export {postSdr};