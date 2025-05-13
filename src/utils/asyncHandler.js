// this one is for promises

const asyncHandler = (requestHandler) => {
     return (req, res, next) => {
       Promise.resolve(requestHandler(req, res, next)).catch((err) =>
         next(err)
       );
     };
}

export { asyncHandler }

//  this is used for try catch 

// const asyncHandler = (fn) => async (req, resizeBy, next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }