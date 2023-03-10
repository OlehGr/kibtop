import { useRouter } from "next/router";
import ArchiveContainer from "../../components/ArchivePage/ArchiveContainer";
import Header from "../../components/Header/Header";
import HeaderService from "../../components/Header/HeaderService/HeaderService";
import HeaderSettings from "../../components/Header/HeaderSettings/HeaderSettings";
import ArchiveHead from "../../components/Heads/ArchiveHead";
import SettingsNav from "../../components/SettingsPage/SettingsNav";
import { ArchiveApi } from "../../services/ArchiveApi";
import { ProfileApi } from "../../services/ProfileApi";
import { getServerSideUser } from "../../services/tools/getServerSideUser/getServerSideUser";

const Archive = ({archiveAdverts}) => {

    return (
        <>
            <ArchiveHead />
            <Header />
            <HeaderService />
            <main className="main main--archive">
                <SettingsNav title="Archive" />
                
                <ArchiveContainer {...{archiveAdverts}} />
            </main>
        </>
    );
}

export async function getServerSideProps({req, res, locale}) {
    

    const {access} = req.cookies

    let user = await ProfileApi.getUserData(access)
                    .catch( err => null)

    if(!user) user = await getServerSideUser(req.cookies)

    if(!user) {
      return {
          redirect: {
            destination: '/auth/login/',
            permanent: false,
          },
      }
    }

    const archiveAdverts = await ArchiveApi.getUserArchive(user.userId, locale)
    
    return {
      props: {user, archiveAdverts},
    }
  }

export default Archive;