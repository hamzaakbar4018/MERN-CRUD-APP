import User from "../models/user.model.js";

export const create = async(req,res)=>{
    try {
        const userdata = new User(req.body);
        if(!userdata){
            res.status(404).json({msg:"User data not found"})
        }
        await userdata.save()
        res.status(200).json({msg:"User data saved",userdata})
    } catch (error) {
        res.status(500).json({msg:"Error in saving data",error})
    }
}

export const getall = async(req,res)=>{
    try {
        const getall = await User.find();
        if(!getall){
            res.status(404).json({msg:"No user data found"})
        }
        res.status(200).json({msg:"User data found",getall})
    } catch (error) {
        res.status(500).json({msg:"Error in getting data",error})
    }
}

export const getone = async(req,res)=>{
    try {
        const id = req.params.id;
        const getone = await User.findById(id);
        if(!getone){
            res.status(404).json({msg:"User data not found"})
        }
        res.status(200).json({msg:"User data found",getone})
    } catch (error) {
        res.status(500).json({msg:"Error in getting the specific data",error})
    }
}

export const update = async(req,res)=>{
    try {
        const id = req.params.id;
        const getone = await User.findById(id);
        if(!getone){
            res.status(404).json({msg:"User not found"})
        }
        const updateData = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({msg:"Data updated sucessfully"})

    } catch (error) {
        res.status(500).json({msg:"Error in getting the specific data",error})
    }
}

export const deleteUser = async( req ,res ) => {
    try {
        const id = req.params.id;
        const getone = await User.findById(id);
        if(!getone){
            res.status(404).json({msg:"User not found"})
        }
        const deleteData = await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User deleted sucessfully"})
    } catch (error) {
        res.status(500).json({msg:"Error in getting the specific data",error})
        
    }
}