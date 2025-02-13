'use client'
import { Button } from 'keep-react'
import { ChangeEvent, useState } from 'react'
import { IPlus } from '../Icons/Icons'

const UploadImage = () => {
  const [base64Image, setBase64Image] = useState<string | null>(null)

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setBase64Image(base64String)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex items-start gap-4">
      <div className="relative cursor-pointer">
        <input
          onChange={(e) => handleUpload(e)}
          type="file"
          className="absolute size-14 cursor-pointer rounded-full border opacity-0"
        />
        {base64Image ? (
          <img
            src={base64Image}
            alt="profile"
            className="size-14 rounded-full border border-dashed border-metal-200 dark:border-metal-800"
          />
        ) : (
          <div className="flex size-14 cursor-pointer items-center justify-center rounded-full border border-dashed border-metal-200 dark:border-metal-800">
            <IPlus />
          </div>
        )}
      </div>

      <div>
        <p className="text-body-3 font-medium text-metal-600 dark:text-metal-300">Upload project logo</p>
        <p className="pb-3 pt-1 text-body-4 font-normal text-metal-300 dark:text-metal-600">Min 600x600, PNG or JPEG</p>
        <Button color="secondary" variant="outline">
          Update
        </Button>
      </div>
    </div>
  )
}

export default UploadImage
