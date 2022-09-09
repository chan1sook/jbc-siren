import Typography from "../../../components/Typography/Typography";
import AccountEarning from "../../../components/AccountEarnings/AccountEarning";

const MainContent = () => {
  return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 h-full flex items-center justify-center">
          <div className="col-span-5 flex flex-col h-full">
              <div className="p-4 flex items-center justify-between">
                  <Typography type="text-h3" darkMode="dark:text-white" fontWeight="font-light">Hello Paul,</Typography>
                  <div className="flex space-x-16">
                      <div>
                          <Typography type="text-tiny" family="font-roboto" isBold>LIGHTHOUSE VERSIONS</Typography>
                          <Typography type="text-tiny" color="text-dark400">Beacon — <span className="text-primary font-bold">V1.3.0</span>-3a24ca5</Typography>
                          <Typography type="text-tiny" color="text-dark400">Validator — <span className="text-primary font-bold">V1.3.0</span>-3a24ca5</Typography>
                      </div>
                      <i className="bi bi-three-dots dark:text-white flex-grow-0 -mt-2"/>
                  </div>
              </div>
              <AccountEarning/>
              <div className="flex-1 min-h-60 w-full"/>
          </div>
          <div className="col-span-7 h-full">

          </div>
      </div>
  )
}

export default MainContent;