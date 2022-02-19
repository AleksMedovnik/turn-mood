import { useForm } from 'react-hook-form';
import search from '../../../images/search.png';

const FormSearch = () => {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <form className='form-search bg-profile' onSubmit={handleSubmit(onSubmit)}>
            <input type='search' {...register("search")}
                placeholder='Веедите поисковый запрос'
                className='form-search__search' />
            <input type='image' src={search} className='form-search__icon' />
        </form>
    )
}

export default FormSearch;