import React from 'react'
import user from '../Images/user.png'

const commentsData=[
    {
        name:"Chakradhar", 
        text:'vdnkvbdnsb  vdkbv d vd ivk dvjd vidk v',
        replies:[{
            name:"Chakradhar", 
            text:'vdnkvbdnsb  vdkbv d vd ivk dvjd vidk v',
            replies:[{
                name:"Chakradhar", 
                text:'vdnkvbdnsb  vdkbv d vd ivk dvjd vidk v',
                replies:[
        
                ]
            },
    
            ]
        },
        {
            name:"Chakradhar", 
            text:'vdnkvbdnsb  vdkbv d vd ivk dvjd vidk v',
            replies:[{
                name:"Chakradhar", 
                text:'vdnkvbdnsb  vdkbv d vd ivk dvjd vidk v',
                replies:[
        
                ]
            },
            ]
        },

        ]
    },
    {
        name:"Chakradhar", 
        text:'vdnkvbdnsb  vdkbv d vd ivk dvjd vidk v',
        replies:[

        ]
    },
    {
        name:"Chakradhar", 
        text:'vdnkvbdnsb  vdkbv d vd ivk dvjd vidk v',
        replies:[

        ]
    },
    {
        name:"Chakradhar", 
        text:'vdnkvbdnsb  vdkbv d vd ivk dvjd vidk v',
        replies:[

        ]
    },
    {
        name:"Chakradhar", 
        text:'vdnkvbdnsb  vdkbv d vd ivk dvjd vidk v',
        replies:[

        ]
    },
    {
        name:"Chakradhar", 
        text:'vdnkvbdnsb  vdkbv d vd ivk dvjd vidk v',
        replies:[{
            name:"Chakradhar", 
            text:'vdnkvbdnsb  vdkbv d vd ivk dvjd vidk v',
            replies:[
    
            ]
        },

        ]
    },
];

const Comment=({data})=>{
    const {name, text }=data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
            <img
            className='w-12 h-12'
            alt='user'
            src={user}
            />
            <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
            </div>
        </div>
    );
};

const CommentsList = ({ comments }) => {
    // Disclaimer: Don't use indexes as keys
    return comments.map((comment, index) => (
            <div key={index}>
                <Comment  data={comment} />
                <div className="pl-5 gorder Oborder-l-black ml-5">
                    <CommentsList comments={comment.replies}/>
                </div>
            </div>
    ));
};

const CommentsConatiner = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsConatiner;
