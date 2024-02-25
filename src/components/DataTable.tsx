import { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'title', headerName: "Title", flex: 1},
    { field: 'author_name', headerName: "Author Name", flex: 1},
    { field: 'isbn', headerName: "ISBN", flex: 1},
    { field: 'length', headerName: "Length", flex: 1},
    { field: 'cover', headerName: "Cover", flex: 1}
]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { libraryData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }

    return (
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="flex flex-row">
                <div>
                    <button className="p-3 bg-slate-400 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                    >
                        Create New Book Entry
                    </button>
                </div>
                <Button onClick={handleOpen} className='p-3 bg-slate-400 rounded m-3 hover:bg-slate-800 hover:text-white' >Update</Button>
                <Button onClick={deleteData} className='p-3 bg-slate-400 rounded m-3 hover:bg-slate-800 hover:text-white' >Delete</Button>
            </div>
            <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col" }
                style={{ height: 400, width: '100%'}}
                >
                    <h2 className="p-3 bg-slate-400 my-2 rounded">Digital Library</h2>
                    <DataGrid className='bg-slate-100' rows={libraryData} columns={columns} rowsPerPageOptions={[5]}
                    checkboxSelection={true}
                    onSelectionModelChange={ (item:any) => {
                        setSelectionModel(item)
                    }}
                    />
                </div>
        </>
    )
}

export default DataTable