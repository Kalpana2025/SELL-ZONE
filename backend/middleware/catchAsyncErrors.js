module.exports = theFunc => (req,res,next)=>{
   console.log("this is catchAsync file");
   Promise.resolve(theFunc(req,res,next)).catch(next);
};