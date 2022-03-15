import { Box, } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface Props {
    delay: number,
    children: React.ReactNode
}

export function SlideBox(props: Props) {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: props.delay }}
        >
            <Box>
                {props.children}
            </Box>
        </motion.div >
    )
}