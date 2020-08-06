import * as Yup from 'yup'

export default Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required()
});