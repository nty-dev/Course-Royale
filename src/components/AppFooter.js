import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a
          href="https://github.com/nty-dev/Course-Royale"
          target="_blank"
          rel="noopener noreferrer"
        >
          CourseRoyale@Edurec
        </a>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a
          href="https://github.com/nty-dev/Course-Royale"
          target="_blank"
          rel="noopener noreferrer"
        >
          Course Royale Development Team
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
