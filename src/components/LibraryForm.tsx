// import { useSubmit } from 'react-router-dom'
import Button from './Button'
import Input from './Input'

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseTitle, chooseAuthorName, chooseISBN, chooseLength, chooseCover } from '../redux/slices/RootSlice'

interface LibraryFormProps {
  id?: string[]
}

const LibraryForm = ( props:LibraryFormProps ) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
      console.log(`ID: ${typeof props.id}`);
      console.log(props.id)
      console.log(data)

      if (props.id && props.id.length > 0) {
          server_calls.update(props.id[0], data)
          console.log(`Updated: ${ data.name } ${ props.id }`)
          setTimeout(() => {window.location.reload()}, 1000);
          event.target.reset()
      } else{
          dispatch(chooseTitle(data.title));
          dispatch(chooseAuthorName(data.author_name));
          dispatch(chooseISBN(data.isbn));
          dispatch(chooseLength(data.length));
          dispatch(chooseCover(data.cover));

          server_calls.create(store.getState())
          setTimeout( () => {window.location.reload()}, 1000 )
      }
  }

  return (
    <div>
      <form className='flex' onSubmit={ handleSubmit(onSubmit) }>
        <div>
          <label htmlFor="title">Title</label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="author_name">Author Name</label>
          <Input {...register('author_name')} name='author_name' placeholder="Author Name" />
        </div>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <Input {...register('isbn')} name='isbn' placeholder="ISBN" />
        </div>
        <div>
          <label htmlFor="length">Length</label>
          <Input {...register('length')} name='length' placeholder="Length" />
        </div>
        <div>
          <label htmlFor="cover">Cover</label>
          <Input {...register('cover')} name='cover' placeholder="Cover" />
        </div>
        <div className="flex p-1">
          <Button className='flex justify-start m-8 bg-slate-500 p-4 rounded hover:bg-slate-800 text-white'
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LibraryForm
