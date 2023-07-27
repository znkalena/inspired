import s from './Order.module.scss';
import {Formik} from 'formik';
import {Form} from 'formik';
import {Field} from 'formik';
import {ErrorMessage} from 'formik';
import { Container } from "../../Layout/Container/container";
import { PatternFormat } from 'react-number-format';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { sendOrder } from '../../../features/cartSlice';

export const Order = (cartItems) =>{
    const dispatch = useDispatch();

    const handleSubmitOrder =(values) => {
        console.log(values);
        dispatch(sendOrder({order:cartItems,values}))
    };

    const validationSchema =Yup.object({
        fio: Yup.string().required('заполните ФИО'),
        adress: Yup.string().test(
            'deliveryTest',
            'Введите адрес дoставки',
            function(value){
                return this.parent.delivery === 'delivery' ? !!value : true;
            }
            ) ,
        phone:Yup.string().required('заполните номер телефона')
        .matches(/^\+\d{3}\(\d{2}\)-\d{3}-\d{2}-\d{2}$/,'некорректный номер телефона'),
        email:Yup.string().email('некорректный формат').required('заполните емайл'),
        delivery:Yup.string().required('выберите способ доставки'),
    })
    return(
        <section>
            <Container>
                <h2 className={s.title}>Оформление заказа</h2>
                <Formik
                initialValues={{
                    fio: '',
                    adress: '' ,
                    phone:'',
                    email:'',
                    delivery:'delivery',
                    }}
                onSubmit={handleSubmitOrder}
                validationSchema={validationSchema}
                > 
                <Form className={s.form}>
                    <fieldset className={s.personal}>
                        <label className={s.label}>
                            <Field
                            className={s.input}
                            type="text"
                            placeholder='ФИО*'
                            name ='fio'
                            />
                            <ErrorMessage className={s.error} name={'fio'} component={'span'} />
                        </label>
                        <label className={s.label}>
                            <Field
                            className={s.input}
                            type="text"
                            placeholder='Адрес доставки'
                            name ='adress'
                            />
                            <ErrorMessage className={s.error} name={'adress'} component={'span'} />
                        </label>
                        <label className={s.label}>
                            <Field
                            className={s.input}
                            as={PatternFormat}
                            format='+375(##)-###-##-##'
                            mask= '_'
                            placeholder='Телефон'
                            name ='phone'
                            />
                            <ErrorMessage className={s.error} name={'phone'} component={'span'} />
                        </label>
                        <label className={s.label}>
                            <Field
                            className={s.input}
                            type="email"
                            placeholder='Email*'
                            name ='mail'
                            />
                            <ErrorMessage className={s.error} name={'mail'} component={'span'} />
                        </label>
                    </fieldset>
                    <fieldset className={s.radioList}>
                        <label className={s.radio}>
                            <Field 
                            className={s.radioInput}
                            type='radio'
                            name='delivery'
                            value= 'delivery'
                            />
                            <span>Доставка</span>
                        </label>
                        <label className={s.radio}>
                            <Field 
                            className={s.radioInput}
                            type='radio'
                            name='delivery'
                            value= 'self'
                            />
                            <span>самовывоз</span>
                        </label>
                        <ErrorMessage className={s.error} name={'delivery'} component={'span'} />
                    </fieldset>
                    <button className={s.submit} type='submit' onClick={handleSubmitOrder}>оформить</button>
                </Form>               
                </Formik>
            </Container>
        </section>
    )
}