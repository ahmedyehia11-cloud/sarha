import joi from 'joi'


export const sendMessage={
    body:joi.object({
        message:joi.string().min(4).max(15000).required()
    }),
    params:joi.object({
        receiverId:joi.string().min(24).max(24).required()
    })
}

export const deleteMessage = {
    params:joi.object({
        id:joi.string().min(24).max(24).required()
    })
}
  