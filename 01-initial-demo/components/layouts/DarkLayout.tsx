interface Props {
    children: React.ReactNode;
}

export const DarkLayout: React.FC<Props> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding: '10px',
        }}>
            <div>
                {children}
            </div>
        </div>
    );
};