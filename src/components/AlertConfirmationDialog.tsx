import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash } from "./svgs"
import { useDeleteNewProductsMutation } from "@/redux/features/dashboardActions/dashboardActionsApi"

import { toast } from "sonner"

const AlertConfirmationDialog = ({ id }: { id: string }) => {

  const [deleteNewProducts] = useDeleteNewProductsMutation();

  const handleDelete = async () => {
    try {
      const response = await deleteNewProducts({ id: id }).unwrap();
      toast.success('Product deleted successfully:');
      console.log('Product deleted successfully:', response);

    } catch (error) {
      toast.error('Failed to delete product:');
      console.error('Failed to delete product:', error);

    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline"><Trash className="" /></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            product and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertConfirmationDialog