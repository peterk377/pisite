import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function LoginReq() {

    function handleRedirect() {
        window.location.href = "./login";
    }
      
    return (
        <>
        {/* LOGIN ALERT */}
        <>
          <Dialog
            open={open}
            onClose={handleRedirect}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"LOGIN REQUIRED"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                ATTENTION: You must be logged in to view this page.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleRedirect} autoFocus>
                Login
              </Button>
            </DialogActions>
          </Dialog>
        </>
      </>
    )
}