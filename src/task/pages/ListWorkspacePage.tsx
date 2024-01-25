import { FormEvent, useEffect, useState } from 'react'
import { Modal } from '../../common/componets/Modal'
import { WorkspaceContainer } from '../components/WorkspaceContainer'
import { WorkspaceItem } from '../components/WorkspaceItem'
import { useForm } from '../../hooks/useForm'
import { useWorkspaceStore } from '../../hooks/useWorkspaceStore'
import { useNavigate } from 'react-router-dom'

const initialFormModal = {
  title: '',
  description: ''
}

export const ListWorkspacePage = () => {

  const {
    workspaces,
    workspaceSelected,
    isLoading: isLoadingWorkspace,
    onLoadingWorkspaces,
    onCreateNewWorkspace,
    onSelectWorkspace
  } = useWorkspaceStore()

  const {
    title, description,
    onInputChange,
    onResetForm
  } = useForm(initialFormModal)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleSudbmit = (e: FormEvent) => {
    e.preventDefault()

    onCreateNewWorkspace({
      workspaceId: '',
      title,
      description
    })

    setIsModalOpen(false)
    onResetForm()
  }

  const cancelModal = () => {
    setIsModalOpen(false)
    onResetForm()
  }

  const handleOnClickWorkspace = (workspaceId: string) => {
    onSelectWorkspace(workspaceId)    
  }


  useEffect(() => {
    onLoadingWorkspaces()
  }, [])

  useEffect(() => {
    if (!workspaceSelected.workspaceId) return
    navigate(`/b/${workspaceSelected.workspaceId}`)
  }, [workspaceSelected])

  return (
    <div className='flex flex-col justify-center  sm:p-20'>

      <div className='flex justify-between mb-10'>
        <h1 className='text-4xl'>
          Espacio de trabajo
        </h1>

        <button className='border rounded-2xl px-4 hover:bg-slate-100'
          onClick={() => setIsModalOpen(true)}
        >
          Crear
        </button>
      </div>


      <div className=''>
        <h2 className='text-2xl mb-4'>Vistos recientemente</h2>
        <WorkspaceContainer>
          {
            isLoadingWorkspace ? <p>Cargando...</p> :
              <WorkspaceItem
                workspaceId={'sdfdsfsdf'}
                title={'Tareas pendientes'}
                description={'Tareas pendientes'}
                handleOnClickWorkspace={handleOnClickWorkspace}
              />
          }
        </WorkspaceContainer>

      </div>

      <div className='mt-10'>
        <h2 className='text-2xl mb-4'>Tus tableros </h2>
        <WorkspaceContainer>

          {
            (workspaces && !isLoadingWorkspace) && workspaces.map((workspace, index) => (
              <WorkspaceItem
                key={index}
                workspaceId={workspace.workspaceId}
                title={workspace.title}
                description={workspace.description}
                handleOnClickWorkspace={handleOnClickWorkspace}
              />
            ))
          }

          {
            isLoadingWorkspace ? <p>Cargando...</p> : ''
          }

        </WorkspaceContainer>
      </div>

      {
        isModalOpen && (
          <Modal className='px-10 py-10'>
            <h1 className='text-2xl'>Nuevo tablero</h1>

            <form className='mt-5' onSubmit={handleSudbmit}>
              <div className='flex flex-col'>
                <label className='font-bold' htmlFor="title">Título: </label>
                <input className='border p-2 rounded-md'
                  type="text" id="title"
                  onChange={onInputChange}
                  value={title}
                  name="title"
                />
              </div>

              <div className='flex flex-col mt-4'>
                <label className='font-bold' htmlFor="description">Descripción: </label>
                <textarea className='border p-2 rounded-md min-h-[100px]' name="description"
                  onChange={onInputChange}
                  value={description}
                  id="description"
                  cols={30} rows={5}>
                </textarea>
              </div>

              <div className='flex justify-end items-center mt-4'>
                <button className='border rounded-xl bg-slate-900 text-white px-4 py-2
              hover:bg-slate-700
            '>
                  Crear tablero
                </button>

                <button type='button' className='border rounded-xl bg-red-500 text-white px-4 py-2
              hover:bg-red-700'
                  onClick={cancelModal}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </Modal>
        )
      }

    </div>
  )
}
